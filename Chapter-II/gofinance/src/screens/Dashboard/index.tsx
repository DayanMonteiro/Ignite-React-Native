import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard'

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
    HighlightCards,
    Transactions,
    Title,
    TransanctionList,
    LogoutButton
} from './styles';

export interface DataListProps extends TransactionCardProps {
    id: string;
}

export function Dashboard() {
//     const data: DataListProps[] = [
//     {
//         id: '1',
//         type: "positive",
//         title: "Desenvolvimento de site",
//         amount: "R$ 12.000,00",
//         category: {
//             name: 'Vendas',
//             icon: "dollar-sign"
//         },
//         date: "02/03/2022"
//     },
//     {
//         id: '2',
//         type: "negative",
//         title: "Hamburgueria Pizzy",
//         amount: "R$ 59,00",
//         category: {
//             name: 'Alimentação',
//             icon: "coffee"
//         },
//         date: "05/03/2022"
//     },
//     {
//         id: '3',
//         type: "negative",
//         title: "Aluguel do apartamento",
//         amount: "R$ 1.200,00",
//         category: {
//             name: 'Casa',
//             icon: "shopping-bag"
//         },
//         date: "10/03/2022"
//     },

// ]

    const [data, setData] = useState<DataListProps[]>([]);

    async function loadTransactions() {
        const dataKey = '@gofinances:transactions';
        const response = await AsyncStorage.getItem(dataKey);
        const transactions = response ? JSON.parse(response) : [];
        
    
        const transactionsFormatted: DataListProps[] = transactions.map((item: DataListProps) => {
          const amount = Number(item.amount)
          .toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        const date = Intl.DateTimeFormat('pt-BR', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
          }).format(new Date(item.date));
    
          return {
        //     ...item,
        //     amount,
        //     date
            id: item.id,
            name: item.name,
            amount,
            type: item.type,
            category: item.category,
            date,
          }
        })

        setData(transactionsFormatted);

      }

   

    useEffect(() => {
        loadTransactions()
    }, [])

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
                <LogoutButton onPress={() => {}} >
                 <Icon name="power" />  
                </LogoutButton>
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

           <Transactions>
               <Title>Listagem</Title>
                {/* <TransactionList 
                 data={data}
                 keyExtractor={item => item.id}
                 renderItem={({ item }) =>  <TransactionCard data={item} />}
                />        */}
                <TransanctionList<DataListProps>
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <TransactionCard data={item} />}
                />
           </Transactions>
        </Container>
    )
}
