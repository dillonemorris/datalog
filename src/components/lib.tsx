import * as colors from '../styles/colors'

type FullPageErrorFallbackProps = {
  error: Error
}

const FullPageErrorFallback: React.FC<FullPageErrorFallbackProps> = ({
  error,
}) => {
  return (
    <div
      role="alert"
      style={{
        color: colors.danger,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <p>Uh oh... There's a problem. Try refreshing the app.</p>
      <pre>{error.message}</pre>
    </div>
  )
}

export { FullPageErrorFallback }
