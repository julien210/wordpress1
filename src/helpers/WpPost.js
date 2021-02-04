import React from "react"
import Box from '@material-ui/core/Box'
import Img from 'gatsby-image'
import  MyForm from './myForm'

const WpPost = (k) => {
console.log(k.pageContext.k.date)

function content(){
  return {__html:  k.pageContext.k.content}
}
  return (
    <div>
      <Box m ={20}>
        <p>{k.pageContext.k.date} ... {k.pageContext.k.dateGmt} </p>
        <p>{k.pageContext.k.authorId} </p>
        <img src={k.pageContext.k.featuredImage.srcSet} alt=''/>
        <p dangerouslySetInnerHTML = {content()} />

        
      </Box>
      < MyForm />
    </div>
  )
}

export default WpPost