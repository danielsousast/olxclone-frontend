import React from 'react';
import { Wraper } from './styles';
import Header from '../../../components/Header'
import Footer from '../../../components/Footer'

const Default = ({children}) => {
    return (
        <Wraper>
            <Header />
            {children}
            <Footer />
        </Wraper>
    )
}

export default Default;