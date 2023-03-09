import { Select } from "@chakra-ui/react"
import { useContext } from "react"
import { Context } from "../../context/Context"

export const SelectLanguage = () => {

    const context = useContext(Context)
    const handleChangeLanguage = (e) =>{
        context.setLanguage(e.target.value)
    }

  return (
    <>
        <Select placeholder='Select language' onChange={handleChangeLanguage}>
            <option value='en'>English</option>
            <option value='es'>Español</option>
        </Select>

    </>
  )
}
