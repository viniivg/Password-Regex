import React, { useState } from 'react'

import { Container, TextInput, Content, Title, View, Text, Image } from './styles'

import imageCheck from '../../assets/icon-check.png'
import imageClose from '../../assets/icon-close.png'

const Input = () => {
    const [validateInput, setValidateInput] = useState({
        case: false,
        number: false,
        length: false
    })

    const secureText = (password: string) => {
        const regexUppercase = new RegExp(/^(?=.*[A-Z]).+$/)
        const regexLowercase = new RegExp(/^(?=.*[a-z]).+$/)
        const regexNumber = new RegExp(/^(?=.*[0-9]).+$/)
        const length = password.length >= 6

        setValidateInput({
            case: regexUppercase.test(password) && regexLowercase.test(password),
            number: regexNumber.test(password),
            length
        })
    }

    return (
        <Container>
            <TextInput
                placeholder="Senha"
                secureTextEntry 
                onChangeText={(password) => {
                    secureText(password)
                }}/>

            <Content>
                <Title>Sua senha deve ter:</Title>

                <View>
                    <Image source={validateInput.length ? imageCheck : imageClose} />
                    <Text>6 carcteres</Text>
                </View>
                <View>
                    <Image source={validateInput.number ? imageCheck : imageClose} />
                    <Text>Números</Text>
                </View>
                <View>
                    <Image source={validateInput.case ? imageCheck : imageClose} />
                    <Text>Letra maiúscula e letra minúscula</Text>
                </View>
            </Content>
        </Container>
    )
}

export default Input