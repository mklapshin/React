import { Input, InputAdornment } from "@material-ui/core"
import Button from '@material-ui/core/Button';

const Chat3 = () => {
    return (
        <div>
            Chat 3
            
            <Input 
            
              
              fullWidth={true}
              placeholder="Введите сообщение"
             /* endAdorment={
                 <InputAdorment position="end">
                  <Button 
                    variant="contained"
                    color="primary"
        
                    onClick={handleSendMessage}
                    >
                  SEND
                  </Button>
               </InputAdorment>
              }*/
              
           

              />
            <Button 
              variant="contained"
              color="primary"
  
             
              >
            SEND
            </Button>
        </div>   
    )
}

export default Chat3