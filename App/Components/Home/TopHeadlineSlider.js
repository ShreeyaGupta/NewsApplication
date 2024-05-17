import React, { useEffect } from 'react'
import { borderRadius,Image,View,Text, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import GlobalApi from '../../Services/GlobalApi'
import { useState } from 'react'
import Color from '../../Shared/Color'
import { useNavigation } from '@react-navigation/native'

function TopHeadlineSlider({newsList}){
  const navigation=useNavigation();

  return (
    <View style={{marginTop:15}}> 
         <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={newsList}
            renderItem={({item})=>(
               <TouchableOpacity onPress={()=>navigation.navigate('read-news',{news:item})}
               style={{width:Dimensions.get('screen').width*0.80,marginRight:15}}>
                  <Image source={{uri:item.urlToImage}}
                  style={{height:Dimensions.get('screen').width*0.77,borderRadius:10}}/>
                  <Text numberOfLines={3} style={{marginTop:10,fontSize:23,fontWeight:'800'}}>{item.title}</Text>
                  <Text style={{marginTop:5,color:Color.primary}}>{item?.source?.name}</Text>
               </TouchableOpacity>
            )}
         />

    </View>
  )
}

export default TopHeadlineSlider
