import { useMemo, type FC } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Controller, useForm } from "react-hook-form";
import { InputField } from "../../components/InputField";
import { Form } from "../../components/Form";
import arrowLeftIcon from '../../assets/icons/arrow-left.svg'
import { api } from "../../api";
import { getPath } from "../../routes";
import { Pages } from "../../consts";

interface SignupFormValues {
    username: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const Signup: FC = () => {
    const navigate = useNavigate()

    const { handleSubmit, control, watch, formState: {isDirty, isValid} } = useForm<SignupFormValues>({
        mode: "onTouched",
        defaultValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
    })

    const onSubmit = async (data: SignupFormValues) => {
        const {username, email, password} = data
        const response = await api().signup(username, email, password)
        if (response) {
            navigate(getPath(Pages.LOGIN))
        }
        console.log(response)
    }

    const fields = useMemo(() => {
        const commonFieldRules = {
            required: 'This field is required',
            minLength: {value: 4, message: 'This field must be at least 4 characters long'},
            maxLength: {value: 20, message: 'This field must be at most 20 characters long'},
        }

        return [
            <Controller
                key="username"
                name="username"
                control={control}
                rules={commonFieldRules}
                render={({ field, fieldState: {error} }) => (
                    <InputField
                        {...field}
                        label="Username"
                        placeholder="Enter username"
                        error={error}
                    />
                )}
            />,
            <Controller
                key="email"
                name="email"
                control={control}
                rules={commonFieldRules}
                render={({ field, fieldState: {error} }) => (
                    <InputField
                        {...field}
                        label="Email"
                        placeholder="Enter email"
                        error={error}
                    />
                )}
            />,
            <Controller
                key="password"
                name="password"
                control={control}
                rules={commonFieldRules}
                render={({ field, fieldState: {error} }) => (
                    <InputField
                        {...field}
                        label="Password"
                        placeholder="Enter password"
                        error={error}
                    />
                )}
            />,
            <Controller
                key="confirmPassword"
                name="confirmPassword"
                control={control}
                rules={{...commonFieldRules, 
                    validate: (value) => {
                        const password = watch("password")
                        return value === password || "Passwords do not match"
                    }
                }}
                render={({ field, fieldState: {error} }) => (
                    <InputField
                        {...field}
                        label="Confirm Password"
                        placeholder="Enter confirm password"
                        error={error}
                    />
                )}
            />
        ]
    }, [])

    return (
        <Form
            fields={fields}
            title={"Create an account"}
            subtitle={"Sign up to get started"}
            onSubmit={handleSubmit(onSubmit)}
            submitButton={
                <Button
                    text="Sign Up"
                    style={{
                        width: "100%"
                    }}
                    buttonStyle={{
                        width: "100%",
                        border: "none",
                        borderRadius: "5px",
                        color: "black",
                        fontWeight: "400"
                    }}
                    type="submit"
                    isDisabled={!isDirty || !isValid}
                />
            }
            footer={
                <Button
                    text="Back"
                    type="button"
                    onClick={() => navigate(getPath(Pages.AUTH))} 
                    style={{
                        width: "100%"
                    }}
                    buttonStyle={{
                        width: "100%",
                        border: "none",
                        borderRadius: "5px",
                        color: "black",
                        fontWeight: "400",
                        backgroundColor: "grey"
                    }}
                    iconStyle={{
                        paddingTop: '5px'
                    }}
                    icon={arrowLeftIcon}
                />
            }
        />
    )
}