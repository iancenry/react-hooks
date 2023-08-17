const Login = () => {
  return (
    <div>
      <input
        type="text"
        onChange={(event) => setUsername(event.target.value)}
      />
    </div>
  );
};

export default Login;
