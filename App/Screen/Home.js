import React from 'react'
import { View,Text, ActivityIndicator, Dimensions } from 'react-native'
import CategoryTextSlider from '../Components/Home/CategoryTextSlider'
import { StyleSheet,ScrollView } from 'react-native'
import Color from '../Shared/Color'
import { Ionicons } from '@expo/vector-icons';
import TopHeadlineSlider from '../Components/Home/TopHeadlineSlider'
import HeadlineList from '../Components/Home/HeadlineList'
import { useEffect,useState } from 'react'
import GlobalApi from '../Services/GlobalApi'

function Home() {
  const [newsList,setNewsList]=useState([])
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
        //getTopHeadline();
        getNewsByCategory('latest');
    },[])
    const getNewsByCategory=async(category)=>{
      setLoading(true)
      const result=(await GlobalApi.getByCategory(category)).data;
      setNewsList(result.articles);
      setLoading(false)
    }
    const getTopHeadline=async()=>{
        const result=(await GlobalApi.getTopHeadline).data;
        setNewsList(result.articles)
    }
  return (
    <ScrollView style={{backgroundColor:Color.white}}>
      
      <View style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <Text style={styles.appName}>Accent Now News</Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
      </View>

      {/* Category List */}
      <CategoryTextSlider selectCategory={(category)=>getNewsByCategory(category)}/>
      
      {loading?<ActivityIndicator style={{marginTop:Dimensions.get('screen').height*0.40}}size={'large'} color={Color.primary}/>:
      <View>
      {/* Top Headline Slider */}
      <TopHeadlineSlider newsList={newsList}/>

      {/* HeadLine List */}
      <HeadlineList newsList={newsList}/>
      </View>
  }

    </ScrollView>
  )
}
const styles = StyleSheet.create({
  appName:{
    fontSize:25,
    fontWeight:'bold',
    color:Color.primary
  }
})


export default Home
