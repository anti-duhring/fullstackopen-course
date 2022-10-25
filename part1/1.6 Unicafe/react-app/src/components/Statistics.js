import StatisticLine from "./StatisticLine";

const Statistics = (props) => {
    return ( 
        <>
        <table>
            <StatisticLine text='good' value={props.good} />
            <StatisticLine text='neutral' value={props.neutral} />
            <StatisticLine text='bad' value={props.bad} />
            <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
            <StatisticLine text='average' value={props.average} />
            <StatisticLine text='positive percentage' value={props.positivePercentage + '%'} />
        </table>
        </>
     );
}
 
export default Statistics;