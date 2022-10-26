import Part from '../components/Part'

const Content = ({ parts }) => 
  <>
    {
        parts.map((part, index) => {
            return (
                <Part
                    key={part.id}
                    part={part}
                />
            )
        })
    }
  </>

export default Content