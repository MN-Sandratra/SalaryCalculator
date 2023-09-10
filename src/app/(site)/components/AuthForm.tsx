'use client'

import Button from "@/app/Components/Button"
import Input from "@/app/Components/inputs/input"

import { signIn, useSession } from 'next-auth/react';
import { BsGithub, BsGoogle  } from 'react-icons/bs';
import { useCallback, useState } from "react"
import { FieldValues, SubmitHandler, useForm } from "react-hook-form"

import { toast } from "react-hot-toast";
import router from "next/router";
import AuthSocialButton from "./AuthSocialButton";

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false);

    const toogleVariant = useCallback(() => {
        if (variant === 'LOGIN') {
            setVariant('REGISTER')
        } else {
            setVariant('LOGIN')
        }
    }, [variant]);

    //reacţ hook form
    const { register,
        handleSubmit,
        formState: {
            errors
        }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (variant === 'REGISTER') {

        }
        if (variant === 'LOGIN') {

        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);
    
        signIn(action, { redirect: false })
          .then((callback) => {
            if (callback?.error) {
              toast.error('Invalid credentials!');
            }
    
            if (callback?.ok) {
              router.push('/schedules')
            }
          })
          .finally(() => setIsLoading(false));
      } 
      
    return (
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div
                className="
          bg-gray-800
            px-4
            py-8
            shadow
            sm:rounded-lg
            sm:px-10
          "
            >
                <form
                    className="space-y-6"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    {variant === 'REGISTER' && (
                        <Input
                            disabled={isLoading}
                            register={register}
                            errors={errors}
                            required
                            id="name"
                            label="Name"
                        />
                    )}
                    <Input
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                        id="email"
                        label="Email address"
                        type="email"
                    />
                    <Input
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                        id="password"
                        label="Password"
                        type="password"
                    />
                    <div>
                        <Button disabled={isLoading} fullWidth type="submit">
                            {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                        </Button>
                    </div>
                </form>
                <div className="mt-6">
                    <div className="relative">
                        <div
                            className="
                absolute 
                inset-0 
                flex 
                items-center
              "
                        >
                            <div className="w-full border-t border-gray-300" />
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="bg-gray-800 px-2 text-gray-300">
                                Or continue with
                            </span>
                        </div>
                    </div>

                    <div className="mt-6 flex gap-2">
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialAction('github')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialAction('google')}
                        />
                    </div>
                </div>
                <div
                    className="
            flex 
            gap-2 
            justify-center 
            text-sm 
            mt-6 
            px-2 
            text-gray-500
          "
                >
                    <div>
                        {variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'}
                    </div>
                    <div
                        onClick={toogleVariant}
                        className="underline cursor-pointer"
                    >
                        {variant === 'LOGIN' ? 'Create an account' : 'Login'}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthForm;