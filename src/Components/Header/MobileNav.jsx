import { AddIcon, MinusIcon } from '@chakra-ui/icons'
import { AccordionButton, AccordionItem, AccordionPanel, Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const MenuItems = [
    {
        id: 1,
        title: 'خانه',
        link: '',
        submenu: 'صفحه اصلی',
    },
    {
        id: 2,
        title: 'نمونه کار',
        link: '',
        submenu: 'نمونه کار خارجی',
    },
    {
        id: 3,
        title: ' بلاگ',
        link: '',
        submenu: '  تخصصی',
    },
    {
        id: 4,
        title: ' فروشگاه',
        link: '',
        submenu: '  حراجی',
    },
    {
        id: 4,
        title: ' تماس',
        link: '',
        submenu: '  تماس',
    },
]

function MobileNav() {
  return (
     MenuItems.map(({id , title , link , submenu}) => {
        return(
    <AccordionItem key={id} className='rounded-md'>
    {({ isExpanded }) => (
      <>
        <h2>
          <AccordionButton>
            <Box as="span" flex='1' textAlign='right'>
             {title}
            </Box>
            {isExpanded ? (
              <MinusIcon fontSize='12px' />
            ) : (
              <AddIcon fontSize='12px' />
            )}
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <Link to={link}>{submenu}</Link>
        </AccordionPanel>
      </>
    )}
  </AccordionItem>

        )
     })
  )
}

export default MobileNav


{/* <AccordionItem>
<>
{({ isExpanded }) => (

      MenuItems.map(({id , title , link , submenu}) => {
          return(
      <>
      <div key={id}>
  <h2>
    <AccordionButton>
      <Box as="span" flex='1' textAlign='right'>
       {title}
      </Box>
      {isExpanded ? (
          <MinusIcon fontSize='12px' />
      ) : (
        <AddIcon fontSize='12px' />
      )}
    </AccordionButton>
  </h2>
  <AccordionPanel pb={4}>
   <Link to={link}>{submenu}</Link>
  </AccordionPanel>
          </div>
     </>

          )
      })

)}
          </>
</AccordionItem> */}