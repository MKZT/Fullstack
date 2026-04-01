"use client"; 
import { useState } from 'react';
import { Button, TextField, Typography, Paper, Box, Stack, Alert } from '@mui/material';

export default function CreateArticlePage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Імітація запиту до API JSONPlaceholder
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title, body, userId: 1 }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });

    if (res.ok) {
      setStatus('success');
      setTitle('');
      setBody('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <Box className="p-4 tablet:p-12 bg-white min-h-screen flex justify-center">
      <Paper 
        elevation={0}
        className="max-w-2xl w-full border-4 border-taxi-black p-8 rounded-none shadow-[15px_15px_0px_0px_rgba(255,204,0,1)]"
      >
        <Typography variant="h4" className="font-black uppercase italic mb-8 border-b-4 border-taxi-yellow inline-block">
          Нова публікація
        </Typography>

        {status === 'success' && (
          <Alert severity="success" className="mb-6 font-bold uppercase rounded-none border-2 border-green-600">
            Статтю успішно створено (імітація POST)
          </Alert>
        )}

        <form onSubmit={handleSubmit}>
          <Stack spacing={4}>
            {/* Поле заголовка */}
            <TextField
              label="ЗАГОЛОВОК СТАТТІ"
              variant="outlined"
              fullWidth
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: '2px solid #1e1e1e', borderRadius: 0 },
                  '&:hover fieldset': { borderColor: '#ffcc00' },
                  '&.Mui-focused fieldset': { borderColor: '#ffcc00' },
                },
                '& .MuiInputLabel-root': { color: '#1e1e1e', fontWeight: 'bold' },
              }}
            />

            {/* Поле тексту статті */}
            <TextField
              label="ТЕКСТ ПУБЛІКАЦІЇ"
              variant="outlined"
              fullWidth
              multiline
              rows={6}
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { border: '2px solid #1e1e1e', borderRadius: 0 },
                  '&:hover fieldset': { borderColor: '#ffcc00' },
                  '&.Mui-focused fieldset': { borderColor: '#ffcc00' },
                },
                '& .MuiInputLabel-root': { color: '#1e1e1e', fontWeight: 'bold' },
              }}
            />

            {/* Кнопка відправки */}
            <Button 
              type="submit"
              disabled={status === 'loading'}
              className="bg-taxi-black text-taxi-yellow font-black py-4 text-lg rounded-none hover:bg-taxi-yellow hover:text-taxi-black transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] active:shadow-none active:translate-x-1 active:translate-y-1"
            >
              {status === 'loading' ? 'ВІДПРАВКА...' : 'ОПУБЛІКУВАТИ'}
            </Button>
          </Stack>
        </form>

        <Box className="mt-8 pt-4 border-t-2 border-dashed border-gray-200">
          <Typography className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            Дані будуть надіслані методом POST на jsonplaceholder.typicode.com
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
}