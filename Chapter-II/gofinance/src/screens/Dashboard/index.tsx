import React from 'react';
import { HighlightCard } from '../../components/HighlightCard';


import { 
    Container,
    Header,
    UserWrapper,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,
    Icon,
    HighlightCards
} from './styles';

export function Dashboard() {
    return(
        <Container>
           <Header>
               <UserWrapper>
                <UserInfo>
                    <Photo source={{ uri: "https://avatars.githubusercontent.com/u/51919212?v=4" }} />
                    <User>
                        <UserGreeting>Olá, </UserGreeting>
                        <UserName>Dayan</UserName>
                    </User>
                </UserInfo>
                <Icon name="power" />
                </UserWrapper>
           </Header>

           <HighlightCards>
               <HighlightCard 
               type="up"
               title='Entradas' 
               amount='R$ 17.400,00' 
               lastTransaction='Última entrada dia 28 de fevereiro' 
               />
                <HighlightCard 
                type="down"
               title='Saídas' 
               amount='R$ 1.259,00' 
               lastTransaction='Última entrada dia 28 de fevereiro' 
               />
                <HighlightCard 
                type="total"
               title='Total' 
               amount='R$ 16.141,00' 
               lastTransaction='Última entrada dia 28 de fevereiro' 
               />

           </HighlightCards>
        </Container>
    )
}
