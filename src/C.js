import {MyContext} from "./index";

export default function C ()
{
    return(
          <MyContext.Consumer>
              {
                  (val)=>{
                      return <div>{val} </div>
                  }
              }
          </MyContext.Consumer>

    );
}