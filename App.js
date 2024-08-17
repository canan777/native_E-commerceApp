import { SafeAreaView, Text, View } from "react-native"
import Routes from "./src/navigators/Routes";
import { NavigationContainer } from "@react-navigation/native";

const App = () =>{
  return(

    <SafeAreaView style={{flex:1}}>
      <NavigationContainer>
      <Routes/>
      </NavigationContainer>
    </SafeAreaView>
  )
}
export default App;