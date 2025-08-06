'use client';

import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
  Link as MuiLink,
  Paper,
  Typography,
  useTheme
} from '@mui/material';
import Link from 'next/link';
import React from 'react';

export default function PrivacyPolicyPage() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 },
        bgcolor:
					theme.palette.mode === 'dark'
					  ? theme.palette.background.default
					  : '#f8f9fa'
      }}
    >
      <Container maxWidth='lg'>
        <Paper
          elevation={3}
          sx={{ p: { xs: 2, sm: 3, md: 5 }, borderRadius: 3 }}
        >
          <Typography
            variant='h3'
            component='h1'
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: theme.palette.primary.main,
              textAlign: 'center'
            }}
          >
						Privacy Policy
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ textAlign: 'center', mb: 4 }}
          >
						Last Updated: {new Date().toLocaleDateString()}
          </Typography>

          <Typography variant='body1' paragraph>
						Ednux ('we,' 'us,' or 'our') is committed to protecting your
						privacy. This Privacy Policy explains how we collect, use, disclose,
						and safeguard your information when you use our Ednux platform,
						including our website, mobile applications, and any related services
						(collectively, the 'Service'). Please read this privacy policy
						carefully. If you do not agree with the terms of this privacy
						policy, please do not access the service.
          </Typography>
          <Typography variant='body1' paragraph>
						We reserve the right to make changes to this Privacy Policy at any
						time and for any reason. We will alert you about any changes by
						updating the 'Last Updated' date of this Privacy Policy. You are
						encouraged to periodically review this Privacy Policy to stay
						informed of updates.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
						1. Information We Collect
          </Typography>
          <Typography variant='body1' paragraph>
						We may collect information about you in a variety of ways. The
						information we may collect via the Service depends on the content
						and materials you use, and includes:
          </Typography>
          <Typography variant='body1' component='div' paragraph>
            <List dense>
              <ListItem>
                <ListItemText primary='Personal Data: Personally identifiable information, such as your name, email address, institutional affiliation, and other details you provide when you register for the Service or update your profile.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Usage Data: Information automatically collected when you access the Service, such as your IP address, browser type, operating system, access times, and the pages you have viewed directly before and after accessing the Service.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Device Data: Information about your computer or mobile device, such as your device ID, model, and manufacturer, and information about the location of your device, if you permit us to access this information.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Content Data: Any content you create, share, or post on the Service, including files, messages, comments, and project details.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Cookies and Tracking Technologies: We may use cookies, web beacons, tracking pixels, and other tracking technologies to help customize the Service and improve your experience.' />
              </ListItem>
            </List>
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						2. How We Use Your Information
          </Typography>
          <Typography variant='body1' paragraph>
						Having accurate information about you permits us to provide you with
						a smooth, efficient, and customized experience. Specifically, we may
						use information collected about you via the Service to:
          </Typography>
          <Typography variant='body1' component='div' paragraph>
            <List dense>
              <ListItem>
                <ListItemText primary='Create and manage your account.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Provide, operate, and maintain our Service.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Improve, personalize, and expand our Service.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Understand and analyze how you use our Service.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Develop new products, services, features, and functionality.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the Service, and for marketing and promotional purposes (with your consent, where required).' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Process your transactions and manage your orders or subscriptions.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Find and prevent fraud.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Ensure compliance with our Terms of Service and applicable laws.' />
              </ListItem>
            </List>
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						3. How We Share Your Information
          </Typography>
          <Typography variant='body1' paragraph>
						We may share information we have collected about you in certain
						situations. Your information may be disclosed as follows:
          </Typography>
          <Typography variant='body1' component='div' paragraph>
            <List dense>
              <ListItem>
                <ListItemText primary='By Law or to Protect Rights: If we believe the release of information about you is necessary to respond to legal process, to investigate or remedy potential violations of our policies, or to protect the rights, property, and safety of others, we may share your information as permitted or required by any applicable law, rule, or regulation.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Third-Party Service Providers: We may share your information with third parties that perform services for us or on our behalf, including payment processing, data analysis, email delivery, hosting services, customer service, and marketing assistance.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='With Your Consent: We may disclose your personal information for any other purpose with your consent.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Business Transfers: We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Affiliates: We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='Other Users: If you interact with other users of the Service, those users may see your name, profile photo, and descriptions of your activity, including sending invitations to other users, chatting with other users, liking posts, following blogs.' />
              </ListItem>
            </List>
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						4. Data Security
          </Typography>
          <Typography variant='body1' paragraph>
						We use administrative, technical, and physical security measures to
						help protect your personal information. While we have taken
						reasonable steps to secure the personal information you provide to
						us, please be aware that despite our efforts, no security measures
						are perfect or impenetrable, and no method of data transmission can
						be guaranteed against any interception or other type of misuse.
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						5. Data Retention
          </Typography>
          <Typography variant='body1' paragraph>
						We will retain your personal information only for as long as is
						necessary for the purposes set out in this Privacy Policy. We will
						retain and use your information to the extent necessary to comply
						with our legal obligations (for example, if we are required to
						retain your data to comply with applicable laws), resolve disputes,
						and enforce our legal agreements and policies.
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						6. Your Rights and Choices
          </Typography>
          <Typography variant='body1' paragraph>
						Depending on your location, you may have the following rights
						regarding your personal information:
          </Typography>
          <Typography variant='body1' component='div' paragraph>
            <List dense>
              <ListItem>
                <ListItemText primary='The right to access – You have the right to request copies of your personal data.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='The right to rectification – You have the right to request that we correct any information you believe is inaccurate or complete information you believe is incomplete.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='The right to erasure – You have the right to request that we erase your personal data, under certain conditions.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.' />
              </ListItem>
            </List>
            <Typography variant='body1' paragraph>
							If you wish to exercise any of these rights, please contact us
							using the contact information provided below.
            </Typography>
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						7. Children's Privacy
          </Typography>
          <Typography variant='body1' paragraph>
						Our Service is not intended for use by children under the age of 13
						(or a higher age threshold where applicable under local law). We do
						not knowingly collect personally identifiable information from
						children under this age. If you become aware that a child has
						provided us with personal information without parental consent,
						please contact us. If we become aware that a child under the
						relevant age threshold has provided us with personal information
						without parental consent, we take steps to remove that information
						and terminate the child's account. For users between 13 and the age
						of majority in their jurisdiction, we may require parental consent
						for certain features or data processing activities.
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						8. Contact Information
          </Typography>
          <Typography variant='body1' paragraph>
						If you have any questions or comments about this Privacy Policy,
						please contact us at:
            <br />
						[Your Company Name, if applicable]
            <br />
						[Your Contact Email, e.g., privacy@ednux.com]
            <br />
						[Your Physical Address, if applicable]
          </Typography>

          <Divider sx={{ my: 3 }} />
          <Box sx={{ textAlign: 'center', mt: 3 }}>
            <MuiLink
              component={Link}
              href='/'
              variant='body2'
              sx={{ textDecoration: 'none' }}
            >
							Back to Home
            </MuiLink>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
