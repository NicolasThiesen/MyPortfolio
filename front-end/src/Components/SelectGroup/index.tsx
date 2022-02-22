import { ButtonGroup, Button, Container } from '@material-ui/core';
import { i18n } from '../../translate/i18n';

export const SelectGroup = ({key_list, handle_click}: {key_list: string[], handle_click:any}) => {
  return (
      <Container>
          <ButtonGroup sx={{float: "right", mt: "30px"}} variant="contained" aria-label="outlined primary button group">
                {key_list.map(key=>(
                    <Button onClick={() => handle_click(key)}>{i18n.t(`select_group.${key}`)}</Button>
                    ))
                }
            </ButtonGroup>
      </Container>
    
  )
}
