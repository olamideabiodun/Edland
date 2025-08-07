'use client';

import Footer from '../../components/home/Footer';
import Header from '../../components/home/Header';
import { keyframes } from '@emotion/react';
import {
  CheckCircleOutline
} from '@mui/icons-material';
import {
  alpha,
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useTheme
} from '@mui/material';
import Link from 'next/link';
import type React from 'react';
import { useEffect } from 'react';

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

export default function FeedbackPage() {
  const theme = useTheme();
  useEffect(() => {
    // Load Zoho form script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.innerHTML = `
      (function() {
        try{
          var f = document.createElement("iframe");
          
          var ifrmSrc = 'https://forms.zohopublic.eu/olamidesokunbi15gm1/form/ShapetheFutureofLearningEdnuxFeedbackSurvey/formperma/-eK_xS2V39NEl514RFVZMFyMu-WMc_H5-DC3eA3RbXA?zf_rszfm=1';
          
          try{
            if ( typeof ZFAdvLead != "undefined" && typeof zfutm_zfAdvLead != "undefined" ) {
              for( var prmIdx = 0 ; prmIdx < ZFAdvLead.utmPNameArr.length ; prmIdx ++ ) {
                var utmPm = ZFAdvLead.utmPNameArr[ prmIdx ];
                utmPm = ( ZFAdvLead.isSameDomian && ( ZFAdvLead.utmcustPNameArr.indexOf(utmPm) == -1 ) ) ? "zf_" + utmPm : utmPm;
                var utmVal = zfutm_zfAdvLead.zfautm_gC_enc( ZFAdvLead.utmPNameArr[ prmIdx ] );
                if ( typeof utmVal !== "undefined" ) {
                  if ( utmVal != "" ) {
                    if(ifrmSrc.indexOf('?') > 0){
                         ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                    }else{
                        ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                    }
                  }
                }
              }
            }
            if ( typeof ZFLead !== "undefined" && typeof zfutm_zfLead !== "undefined" ) {
              for( var prmIdx = 0 ; prmIdx < ZFLead.utmPNameArr.length ; prmIdx ++ ) {
                var utmPm = ZFLead.utmPNameArr[ prmIdx ];
                var utmVal = zfutm_zfLead.zfutm_gC_enc( ZFLead.utmPNameArr[ prmIdx ] );
                if ( typeof utmVal !== "undefined" ) {
                  if ( utmVal != "" ){
                    if(ifrmSrc.indexOf('?') > 0){
                      ifrmSrc = ifrmSrc+'&'+utmPm+'='+utmVal;
                    }else{
                      ifrmSrc = ifrmSrc+'?'+utmPm+'='+utmVal;
                    }
                  }
                }
              }
            }
          }catch(e){}
          
          f.src = ifrmSrc;
          f.style.border="none";
          f.style.height="600px";
          f.style.width="100%";
          f.style.transition="all 0.5s ease";
          f.style.borderRadius="12px";
          f.setAttribute("aria-label", 'Shape the Future of Learning | Ednux Feedback Survey');
          
          var d = document.getElementById("zf_div_-eK_xS2V39NEl514RFVZMFyMu-WMc_H5-DC3eA3RbXA");
          if (d) {
            d.appendChild(f);
          }
          
          window.addEventListener('message', function (event){
            var evntData = event.data;
            if( evntData && evntData.constructor == String ){
              var zf_ifrm_data = evntData.split("|");
              if ( zf_ifrm_data.length == 2 || zf_ifrm_data.length == 3 ) {
                var zf_perma = zf_ifrm_data[0];
                var zf_ifrm_ht_nw = ( parseInt(zf_ifrm_data[1], 10) + 15 ) + "px";
                var iframe = document.getElementById("zf_div_-eK_xS2V39NEl514RFVZMFyMu-WMc_H5-DC3eA3RbXA").getElementsByTagName("iframe")[0];
                if ( iframe && (iframe.src).indexOf('formperma') > 0 && (iframe.src).indexOf(zf_perma) > 0 ) {
                  var prevIframeHeight = iframe.style.height;
                  var zf_tout = false;
                  if( zf_ifrm_data.length == 3 ) {
                      iframe.scrollIntoView();
                      zf_tout = true;
                  }

                  if ( prevIframeHeight != zf_ifrm_ht_nw ) {
                    if( zf_tout ) {
                        setTimeout(function(){
                            iframe.style.height = zf_ifrm_ht_nw;
                        },500);
                    } else {
                        iframe.style.height = zf_ifrm_ht_nw;
                    }
                  }
                }
              }
            }
          }, false);
        }catch(e){}
      })();
    `;
    
    document.head.appendChild(script);
    
    return () => {
      // Cleanup script on unmount
      document.head.removeChild(script);
    };
  }, []);

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: '100vh',
          bgcolor: 'background.default',
          py: 4,
          position: 'relative',
          fontFamily: 'Questrial',
          overflow: 'hidden'
        }}
      >
        {/* Decorative background elements */}
        <Box
          sx={{
            position: 'absolute',
            top: '10%',
            left: '5%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.2)} 0%, ${alpha(theme.palette.primary.light, 0.1)} 100%)`,
            filter: 'blur(60px)',
            zIndex: 0,
            animation: `${float} 8s infinite ease-in-out`
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: '15%',
            right: '10%',
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${alpha(theme.palette.secondary.main, 0.2)} 0%, ${alpha(theme.palette.secondary.light, 0.1)} 100%)`,
            filter: 'blur(60px)',
            zIndex: 0,
            animation: `${float} 10s infinite ease-in-out`,
            animationDelay: '1s'
          }}
        />

        {/* Main Content */}
        <Container maxWidth='lg'>
          <Grid
            container
            spacing={4}
            sx={{
              position: 'relative',
              zIndex: 1,
              pt: 7,
              fontFamily: 'Questrial'
            }}
          >
            {/* Left side - Information */}
            <Grid
              item
              xs={12}
              md={5}
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <Box sx={{ animation: `${fadeIn} 0.6s ease-out` }}>
                <Typography
                  variant='h3'
                  component='h1'
                  fontWeight={700}
                  gutterBottom
                  sx={{
                    fontFamily: 'Questrial',
                    color:
                      theme.palette.mode === 'dark'
                        ? '#ffffff'
                        : 'text.primary'
                  }}
                >
                  We're Building Something Special
                </Typography>

                <Typography
                  variant='body1'
                  paragraph
                  sx={{
                    mb: 3,
                    fontSize: '1.1rem',
                    fontFamily: 'Questrial',
                    color:
                      theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.9)'
                        : 'text.primary'
                  }}
                >
                  Ednux is currently under development, and we're working hard
                  to bring you the best educational platform experience.
                </Typography>

                <Typography
                  variant='body1'
                  paragraph
                  sx={{
                    mb: 3,
                    fontSize: '1.1rem',
                    fontFamily: 'Questrial',
                    color:
                      theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.9)'
                        : 'text.primary'
                  }}
                >
                  Your feedback is invaluable to us! Help shape the future of
                  Ednux by sharing your thoughts, ideas, and expectations.
                </Typography>

                <Typography
                  variant='body1'
                  paragraph
                  sx={{
                    fontSize: '1.1rem',
                    fontFamily: 'Questrial',
                    color:
                      theme.palette.mode === 'dark'
                        ? 'rgba(255, 255, 255, 0.9)'
                        : 'text.primary'
                  }}
                >
                  Subscribe to our newsletter to stay updated on our progress
                  and be the first to know when we launch.
                </Typography>

                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: 4,
                    p: 2,
                    fontFamily: 'Questrial',
                    borderRadius: 2,
                    bgcolor: alpha(
                      theme.palette.primary.main,
                      theme.palette.mode === 'dark' ? 0.1 : 0.05
                    ),
                    border: `1px solid ${alpha(theme.palette.primary.main, theme.palette.mode === 'dark' ? 0.2 : 0.1)}`
                  }}
                >
                  <CheckCircleOutline color='primary' sx={{ mr: 2 }} />
                  <Typography
                    variant='body2'
                    sx={{
                      color:
                        theme.palette.mode === 'dark'
                          ? 'rgba(255, 255, 255, 0.9)'
                          : 'text.primary'
                    }}
                  >
                    Early subscribers will receive{' '}
                    <strong>exclusive access</strong> to our beta version and
                    special launch offers!
                  </Typography>
                </Box>
              </Box>
            </Grid>

            {/* Right side - Zoho Form */}
            <Grid item xs={12} md={7}>
              <Paper
                elevation={0}
                sx={{
                  bgcolor: alpha(
                    theme.palette.background.paper,
                    theme.palette.mode === 'dark' ? 0.8 : 0.9
                  ),
                  backdropFilter: 'blur(20px)',
                  animation: `${fadeIn} 0.8s ease-out`,
                  animationDelay: '0.2s'
                }}
              >
                <Typography
                  variant='h5'
                  component='h2'
                  fontWeight={600}
                  gutterBottom
                  sx={{
                    fontFamily: 'Questrial',
                    color: theme.palette.mode === 'dark' ? '#ffffff' : 'text.primary',
                    mb: 3
                  }}
                >
                  Share Your Feedback
                </Typography>

                <Typography
                  variant='body2'
                  sx={{
                    mb: 3,
                    color: theme.palette.mode === 'dark'
                      ? 'rgba(255, 255, 255, 0.7)'
                      : 'text.secondary'
                  }}
                >
                  Help us create the perfect educational experience for you
                </Typography>

                {/* Zoho Form Container */}
                <Box
                  id="zf_div_-eK_xS2V39NEl514RFVZMFyMu-WMc_H5-DC3eA3RbXA"
                  sx={{
                    width: '100%',
                    minHeight: '500px',
                    '& iframe': {
                      boxShadow: theme.shadows[1]
                    }
                  }}
                />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}