import * as S from './styled'

interface props {
  steps: { label: string; icon: JSX.Element }[]
  activeStep: number
}

export function Stepper({ steps, activeStep }: props) {
  return (
    <S.StepperContainer>
      {steps.map((step, index) => {
        return (
          <S.Stepper key={index}>
            <div
              style={{
                top: 19,
                left: 'calc(-50% + 1.7rem)',
                right: 'calc(50% + 1.7rem)',
                position: 'absolute',
                backgroundColor: '#D4D3D1'
              }}
            >
              <span
                style={{
                  borderTopStyle: 'solid',
                  borderTopWidth: 2,
                  transition: 'all 0.2s linear',
                  width: index <= activeStep ? '100%' : 0,
                  display: index === 0 ? 'none' : 'block',
                  borderColor:
                    index <= activeStep ? '#1E40AF' : 'rgb(212, 211, 209)'
                }}
              />
            </div>
            <div
              style={{
                display: 'flex',
                margin: '0 auto 8px auto',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor:
                  index === activeStep || index < activeStep
                    ? '#1E40AF'
                    : '#D4D3D1',
                width: '2.5rem',
                height: '2.5rem',
                borderRadius: '50%',
                transition: 'all 0.2s linear',
                transitionDelay: '0.2s',
                position: 'relative'
              }}
            >
              <div
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  zIndex: 1,
                  color:
                    index < activeStep
                      ? '#FFF'
                      : index > activeStep
                      ? '#4b4b4b'
                      : '#1E40AF'
                }}
              >
                {step.icon}
              </div>
              <div
                style={{
                  backgroundColor: index < activeStep ? '#1E40AF' : '#FFF',
                  borderRadius: '50%',
                  transition: 'all 0.2s linear',
                  transitionDelay: '0.2s',
                  width: index === activeStep ? '2rem' : '0rem',
                  height: index === activeStep ? '2rem' : '0rem',
                  position: 'absolute'
                }}
              />
            </div>
            <p
              style={{
                textAlign: 'center',
                fontSize: 12,
                transition: 'all 0.2s linear',
                transitionDelay: '0.2s',
                color: index === activeStep ? '#1E40AF' : '#B0B0B0'
              }}
            >
              {step.label}
            </p>
          </S.Stepper>
        )
      })}
    </S.StepperContainer>
  )
}
