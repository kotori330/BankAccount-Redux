import { RootState } from "./reducer/rootReducer"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch,  } from "./store"


function App() {
  const balance = useSelector((state: RootState) => state.balance)

  const dispatch = useDispatch<AppDispatch>()

  const handleIncrease = () => {
    dispatch(increase(100000)
  )}

  const handleDecrease = () => {
    dispatch(decrease(50000))
  }



  return (
    <>
     <div className="flex justify-center items-center">
    <h1>Your balance: <span>{balance}$</span></h1>
    <button onClick={handleIncrease}>+100000$</button>
    <button onClick={handleDecrease}>-50000$</button>
     </div>
    </>
  )
}

export default App
