import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import Button from '../../components/ui/button/Button';
import Modal from '../../components/ui/modal/Modal';

const Home = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          bgcolor: '#fff',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Button handleClick={handleOpen}>Ajouter un vin</Button>
        <Modal open={open} handleClose={handleClose} />
      </Box>
    </Container>
  );
};

export default Home;
