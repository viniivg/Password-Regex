import React from 'react'

import { Input } from '../../components'
import { Container, Text } from './styles'

const Home = () => {
    return(
        <Container>
            <Text>Digite sua nova senha: </Text>
            <Input />
        </Container>
    )
}

export default Home