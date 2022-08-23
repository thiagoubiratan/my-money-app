import React, { Component } from 'react'

import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import ValueBox from '../common/widget/valueBox'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title='Dashboard' small='Versão 1.0'>
                <Content>
                    <ValueBox cols='12 4' color='green' icon='bank' value='10' text='Total de Créditos' />
                    <ValueBox cols='12 4' color='red' icon='credit-card' value='10' text='Total de Débitos' />
                    <ValueBox cols='12 4' color='blue' icon='money' value='10' text='Valor Consolidado' />
                </Content>
                </ContentHeader>
            </div>
        )
    }
}

export default Dashboard