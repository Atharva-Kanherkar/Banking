import HeaderBox from '@/components/HeaderBox';
import TotalBalanceBox from '@/components/TotalBalanceBox';
import React from 'react';

const Home= () => {
    return (
        <section className='home'>
           <div className='home-content'>
           <header className='home-header'>
             <HeaderBox
                        type="greeting" title={'Ttiel'} subtext={'saadad'}
                        user={'Welcome to the Bank'}
             />
             <TotalBalanceBox
              accounts = {[]}
              totalBanks = {2}
              totalCurrentBalance = {1233.22}
             
             />

           </header>
           </div>
        </section>
    )
};

export default  Home;