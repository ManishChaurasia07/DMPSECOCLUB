/** @jsxRuntime classic */
/** @jsx jsx */
import SEO from 'components/seo';
import Copyrigh from "assets/images/Copyright.png"
import { jsx, Box, Container, Grid, Heading, Text, Button, Image } from 'theme-ui';

const Copyright = () => {
  return (
      <Container as="section" id='copyright' sx={styles.section}>
        <SEO
          title="DMPS - ECOCLUB"
          description="Hi! We protect our environment by taking some of the steps like a collecting of e-waste which is hazardous to our environment and plastic. We all do some acitivity which can protect us from destroying the world!"
        />
        <p sx={styles.text}>
        <Image src={Copyrigh} />
<br></br>
<br></br>
<br></br>

 © Copyright Holder - Manish Chaurasia
 <br></br>
 <br></br>

The humans.txt file explains the team, technology,
<br></br>
and graphic assets behind this site humanstxt.org.
<br></br>
<br></br>
________________________________________________________________________
<br></br>
 <br></br>
Website Design and Development:
<br></br>
- Developer: Manish Chaurasia
<br></br>
- Designer: Riddhi, Shefali
<br></br>
- Content Writer: Achintya
<br></br>
<br></br>

Tools used:
<br></br>
Canva
<br></br>
Photoshop
<br></br>
<br></br>
________________________________________________________________________
<br></br>
<br></br>

SOCIAL MEDIA HANDLE - 
<br></br>
Github - https://github.com/ManishChaurasia07
<br></br>

Instagram - https://www.instagram.com/deepmemorial_/
<br></br>

Official Website - https://dmps.asia/
<br></br>
________________________________________________________________________

<br></br>

LANGUAGES USED -
<br></br>
<br></br>
React
<br></br>

JavaScript
<br></br>

Next.js
<br></br>

Three.js
<br></br>

Theme UI
<br></br>

_____________________________________________________________________________
<br></br>
<br></br>

FONTS -
<br></br>
<br></br>
Bodoni
<br></br>
Helvetica
<br></br>
Avenir
<br></br>
Gotham
<br></br>
Hiragino Kaku Gothic
<br></br>
Inter Sans-serif
<br></br>
<br></br>
Note - I do not give permission to present any of my projects as your own.
<br></br>
<br></br>
For permissions or inquiries, please contact:
<br></br>
[manishchaurasiya505@gmail.com]
<br></br>
<br></br>

The content, design, and code of this website are protected by copyright law. 
<br></br>No part of this website may be reproduced, distributed, or transmitted
<br></br> in any form or by any means, including photocopying, recording, or other 
<br></br>electronic or mechanical methods, without the prior written permission of the 
<br></br>copyright holders, except in the case of brief quotations embodied in critical 
<br></br>reviews and certain other noncommercial uses permitted by copyright law.
<br></br>
<br></br>
Unauthorized use or reproduction of any part of this website may result in legal action.
<br></br>
<br></br>
Copyright © 2023 Deep Memorial Public School. All rights reserved.
        </p>
    </Container>
  );
};

export default Copyright;

const styles={
    section:{
        pt: [8, null, 12, 6, null, 5],
        pb: [8, null, null, 8, 0],
    },
    text: {
        marginLeft: ['50px', '50px'],
        marginTop: ['-400px', '-70px'],
    }
}