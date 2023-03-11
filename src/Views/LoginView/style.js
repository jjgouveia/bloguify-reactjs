const style = {
  bgInfo: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor: (t) =>
      t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  loginContainer: {
    my: 8,
    mx: 4,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  
  submitBtn: { mt: 2, mb: 2, backgroundColor: "#88abc2" },
}

export default style;

