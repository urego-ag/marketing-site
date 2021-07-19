import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import '../styles/index.css';

function Index() {
  return (
    <main>
      <Helmet>
        <title>UREGO</title>
      </Helmet>
      <div class="bgimg">
        <div class="topcentre">
          <img alt="Urego logo" src="images/UREGO_logo_white_claim_RGB.svg" style="width:50%;margin-left:auto;margin-right:auto;display:block;" />
        </div>
        <div class="middle">
          <h1>COMING SOON</h1>
        </div>
        <div class="bottomleft">
          <p>&copy;2021 Urego AG</p>
        </div>
      </div>
    </main>
  );
}

export default Index;
