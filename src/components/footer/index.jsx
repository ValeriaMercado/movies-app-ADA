import { Box , IconButton, Select } from "@chakra-ui/react"
import { useContext } from "react"
import { Context } from "../../context/Context"
import { FiMoon, FiSun } from "react-icons/fi";


export const Footer = () => {
    const context = useContext(Context)

    const changeTheme = () =>{
        context.clearTheme ? context.setClearTheme(false) : context.setClearTheme(true)
    }

    return (
        <Box
            as="footer"
            width="100%" height={32}
            bg='brand.primary'
        >

            <IconButton
                mt={5}
                _hover={{ background: 'none' }}
                icon={ context.clearTheme ? <FiMoon/> : <FiSun/>}
                onClick={changeTheme}
            ></IconButton>

            {/* <Select onChange={handleChange} placeholder='Language' size='sm' w={'20%'} bg='brand.primary' borderColor='brand.secondary' color='brand.accent'>
                <option value='option1'>Español</option>
                <option value='option2'>English</option>
            </Select> */}

        </Box>
    )
}
