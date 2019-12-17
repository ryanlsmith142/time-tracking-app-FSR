class TimersDashboard extends React.Component {
    render() {
        return (
            <div className='ui three column centered grid'>
                <div className='column'>
                    <EditableTimerList />
                    <ToggleableTimerForm
                        isOpen={true}
                    />
                </div>
            </div>
        );
    } // render()
} //TimersDashboard

class EditableTimerList extends React.Component {
    render() {
        return (
            <div id='timers'>
                <EditableTimer
                    title='Learn React'
                    project='Web Domination'
                    elapsed='8986300'
                    runningSince={null}
                    editFormOpen={false}
                />
                <EditableTimer
                    title='Learn Extreme Ironing'
                    project='World Domination'
                    elapsed='3890985'
                    runningSince={null}
                    editFormOpen={true}
                />
            </div>
        );
    } /*render() */
} /*Editable Timer*/

class EditableTimer extends React.Component {
    render() {
        if (this.props.editFormOpen) {
            return (
                <TimerForm
                    title={this.props.title}
                    project={this.props.project}

                />
            )
        } else {
            return (


                <Timer
                    title={this.props.title}
                    project={this.props.project}
                    elapsed={this.props.elapsed}
                    runningSince={this.props.runningSince}
                />
            )
        }
    } //render()
} //EditableTimer



