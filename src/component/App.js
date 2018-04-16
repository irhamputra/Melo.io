import React, { Component } from 'react';
import AddOption from '../component/AddOption';
import Header from '../component/Header';
import Options from '../component/Options'
import Action from '../component/Action';
import OptionModal from '../component/OptionModal';

export class App extends Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
      this.setState(() => ({ options: [] }));
    };

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }))
    };

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];

        this.setState(() => ({ selectedOption: option }))
    };

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        } else if ( this.state.options.indexOf(option) > -1) {
            return 'This option already exist';
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }))
    };

    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }))
    };

    componentDidMount(){
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options){
                this.setState(() => ({ options }))
            }
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length){
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    render(){
        const subtitle = 'Put your life in the hands of computer';

        return (
            <div>
                <Header subtitle={subtitle}/>

                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />

                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                </div>

                <OptionModal
                    selectedOption={this.state.selectedOption}
                    handleCloseModal={this.handleCloseModal}
                />
            </div>
        )
    }
}

export default App;