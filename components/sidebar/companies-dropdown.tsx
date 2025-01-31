import { Dropdown, Text } from '@nextui-org/react';
import React, { useState } from 'react';
import { AcmeIcon } from '../icons/acme-icon';
import { AcmeLogo } from '../icons/acmelogo';
import { BottomIcon } from '../icons/sidebar/bottom-icon';
import { Box } from '../styles/box';
import { Flex } from '../styles/flex';

interface Company {
   name: string;
   location: string;
   logo: React.ReactNode;
}

export const CompaniesDropdown = () => {
   const [company, setCompany] = useState<Company>({
      name: 'Suzuki Digital',
      location: 'Udyog Vihar, Gurugram',
      logo: <AcmeIcon />, 
   });
   return (
      // <Dropdown placement="bottom-right" borderWeight={'extrabold'}>
      //    <Dropdown.Trigger css={{cursor: 'pointer'}}>
      <Box>
         <Flex align={'center'} css={{ gap: '$7' }}>
            {company.logo}
            <Box>
               <Text
                  h3
                  size={'$xl'}
                  weight={'medium'}
                  css={{
                     m: 0,
                     color: '$accents9',
                     lineHeight: '$lg',
                     mb: '-$5',
                  }}
               >
                  {company.name}
               </Text>
               <Text
                  span
                  weight={'medium'}
                  size={'$xs'}
                  css={{ color: '$accents8' }}
               >
                  {company.location}
               </Text>
            </Box>
            {/* <BottomIcon /> */}
         </Flex>
      </Box>
      //    </Dropdown.Trigger>

      // </Dropdown>
   );
};
