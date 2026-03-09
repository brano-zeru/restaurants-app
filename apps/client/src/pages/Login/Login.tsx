import { useMemo, type FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import arrowLeftIcon from "../../assets/icons/arrow-left.svg";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { InputField, PasswordField } from "../../components/InputField";
import { Pages } from "../../consts";
import { getPath } from "../../routes";
import { api } from "../../api";
import type { LoginRequestDTO } from "@restaurants-app/types";
import { useAuth } from "../../contexts/AuthContext/useAuth";
import hiddenPasswordIcon from '../../assets/icons/eye-password-hide.svg'
import visiblePasswordIcon from '../../assets/icons/eye-password-visible.svg'

export const Login: FC = () => {
    const navigate = useNavigate();
    const {setUser} = useAuth();

    const { handleSubmit, control, formState: {isDirty, isValid} } = useForm<LoginRequestDTO>({
        mode: "onTouched",
        defaultValues: {
            identifier: "",
            password: ""
        }
    });

    const onSubmit = async (data: LoginRequestDTO) => {
        try {
            const {user} = await api().signin(data)
            if (!user) return
            setUser(user)
            navigate(getPath(Pages.HOME))
        } catch (error) {
            console.error(error)
        }
    };

    const fields = useMemo(() => [
        <Controller 
            key="identifier"
            name="identifier"
            control={control}
            rules={{required: 'This field is required'}}
            render={({ field, fieldState: {error} }) => (
                <InputField
                    {...field}
                    label="Email or Username"
                    placeholder="Enter email or username" 
                    error={error}
                    style={error && {borderColor: "red"}}
                />
            )}
        />,
        <Controller
            key="password"
            name="password"
            control={control}
            rules={{required: 'This field is required'}}
            render={({ field, fieldState: {error} }) => (
                <PasswordField
                    {...field}
                    label="Password"
                    placeholder="Enter password" 
                    error={error}
                    style={error && {borderColor: "red"}}
                    hiddenIconSrc={hiddenPasswordIcon}
                    visibleIconSrc={visiblePasswordIcon}
                />
            )}
        />
    ], []);    

    return (
        <Form 
            fields={fields}
            title={"Welcome back"}
            subtitle={"Sign in to your account"}
            onSubmit={handleSubmit(onSubmit)}
            submitButton={
                <Button 
                    text="Log In" 
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