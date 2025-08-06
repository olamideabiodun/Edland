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

export default function TermsOfServicePage() {
  const theme = useTheme();

  // Pre-calculate bgcolor to simplify the sx prop
  const boxBgColor =
		theme.palette.mode === 'dark'
		  ? theme.palette.background.default
		  : '#f8f9fa';

  return (
    <Box sx={{ py: { xs: 4, md: 8 }, bgcolor: boxBgColor }}>
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
						Terms of Service
          </Typography>
          <Typography
            variant='body2'
            color='text.secondary'
            sx={{ textAlign: 'center', mb: 4 }}
          >
						Last Updated: {new Date().toLocaleDateString()}
          </Typography>

          <Typography variant='body1' paragraph>
						Welcome to Ednux! These Terms of Service ('Terms') govern your use
						of the Ednux platform, including our website, mobile applications,
						and any related services (collectively, the 'Service') provided by
						Ednux ('we,' 'us,' or 'our'). By accessing or using our Service, you
						agree to be bound by these Terms. If you do not agree to these
						Terms, please do not use our Service.
          </Typography>

          <Divider sx={{ my: 3 }} />

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium' }}
          >
						1. Acceptance of Terms
          </Typography>
          <Typography variant='body1' paragraph>
						By creating an account, accessing, or using any part of the Service,
						you represent that you have read, understood, and agree to be bound
						by these Terms. If you are using the Service on behalf of an
						organization or entity, you represent that you have the authority to
						bind that entity to these Terms.
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						2. User Accounts and Responsibilities
          </Typography>
          <Typography variant='body1' component='div' paragraph>
            <List dense>
              <ListItem>
                <ListItemText primary='To use certain features of the Service, you may be required to create an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.' />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    "You are responsible for safeguarding your account password and for any activities or actions under your account. We encourage you to use a strong password (passwords that use a combination of upper and lower case letters, numbers, and symbols)."
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="You agree not to share your account credentials or allow others to access your account without our prior written permission." />
              </ListItem>
              <ListItem>
                <ListItemText primary='You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.' />
              </ListItem>
            </List>
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						3. Platform Use and Conduct
          </Typography>
          <Typography variant='body1' paragraph>
						You agree to use the Service only for lawful purposes and in
						accordance with these Terms. You agree not to use the Service:
          </Typography>
          <Typography variant='body1' component='div' paragraph>
            <List dense>
              <ListItem>
                <ListItemText primary='In any way that violates any applicable national or international law or regulation.' />
              </ListItem>
              <ListItem>
                <ListItemText primary='For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content or otherwise.' />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    "To transmit, or procure the sending of, any advertising or promotional material, including any 'junk mail,' 'chain letter,' 'spam,' or any other similar solicitation."
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText primary='To impersonate or attempt to impersonate Ednux, an Ednux employee, another user, or any other person or entity.' />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary={
                    "To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which, as determined by us, may harm Ednux or users of the Service or expose them to liability."
                  }
                />
              </ListItem>
            </List>
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						4. Intellectual Property Rights
          </Typography>
          <Typography variant='body1' paragraph>
						The Service and its original content (excluding Content provided by
						users), features, and functionality are and will remain the
						exclusive property of Ednux and its licensors. The Service is
						protected by copyright, trademark, and other laws of both [Your
						Country/Jurisdiction] and foreign countries. Our trademarks and
						trade dress may not be used in connection with any product or
						service without the prior written consent of Ednux.
          </Typography>
          <Typography variant='body1' paragraph>
						You retain all your rights to any Content you submit, post or
						display on or through the Service and you are responsible for
						protecting those rights. By submitting Content, you grant Ednux a
						worldwide, non-exclusive, royalty-free license to use, copy,
						reproduce, process, adapt, modify, publish, transmit, display, and
						distribute such Content in any and all media or distribution methods
						(now known or later developed) for the purposes of operating,
						developing, providing, and improving the Service.
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						5. Disclaimers and Limitation of Liability
          </Typography>
          <Typography variant='body1' paragraph>
						The Service is provided on an 'AS IS' and 'AS AVAILABLE' basis.
						Ednux makes no warranties, expressed or implied, and hereby
						disclaims and negates all other warranties including, without
						limitation, implied warranties or conditions of merchantability,
						fitness for a particular purpose, or non-infringement of
						intellectual property or other violation of rights.
          </Typography>
          <Typography variant='body1' paragraph>
						In no event shall Ednux or its suppliers be liable for any
						consequential, incidental, direct, indirect, special, punitive, or
						other damages whatsoever (including, without limitation, damages for
						loss of data or profit, or due to business interruption) arising out
						of the use or inability to use the Service, even if Ednux or an
						Ednux authorized representative has been notified orally or in
						writing of the possibility of such damage.
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						6. Termination
          </Typography>
          <Typography variant='body1' paragraph>
						We may terminate or suspend your account and bar access to the
						Service immediately, without prior notice or liability, under our
						sole discretion, for any reason whatsoever and without limitation,
						including but not limited to a breach of the Terms.
          </Typography>
          <Typography variant='body1' paragraph>
						If you wish to terminate your account, you may simply discontinue
						using the Service. All provisions of the Terms which by their nature
						should survive termination shall survive termination, including,
						without limitation, ownership provisions, warranty disclaimers,
						indemnity, and limitations of liability.
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						7. Governing Law
          </Typography>
          <Typography variant='body1' paragraph>
						These Terms shall be governed and construed in accordance with the
						laws of [Your Country/Jurisdiction], without regard to its conflict
						of law provisions.
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						8. Changes to Terms
          </Typography>
          <Typography variant='body1' paragraph>
						We reserve the right, at our sole discretion, to modify or replace
						these Terms at any time. If a revision is material, we will provide
						at least 30 days' notice prior to any new terms taking effect. What
						constitutes a material change will be determined at our sole
						discretion.
          </Typography>
          <Typography variant='body1' paragraph>
						By continuing to access or use our Service after any revisions
						become effective, you agree to be bound by the revised terms. If you
						do not agree to the new terms, you are no longer authorized to use
						the Service.
          </Typography>

          <Typography
            variant='h5'
            component='h2'
            gutterBottom
            sx={{ fontWeight: 'medium', mt: 3 }}
          >
						9. Contact Information
          </Typography>
          <Typography variant='body1' paragraph>
						If you have any questions about these Terms, please contact us at
						[Your Contact Email or Link to Contact Page, e.g.,
						support@ednux.com].
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
