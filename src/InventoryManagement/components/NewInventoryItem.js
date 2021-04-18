import React, { Component } from "react";
import GWData from '../../Data/GWData.js';

class NewInventoryItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      singleItem: {
        gameSystem: null,
        army: null,
        unitName: null,
        modelCount: null,
        newOnSprue: null,
        monopose: null,
        pricePurchased: null,
        listed: null,
        sold: null,
        expectedValue: null,
        priceSold: null,
        postAndPackage: null,
      },
    };

    this.handleSystemChange = this.handleSystemChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  armyOptions = [];

  handleSystemChange(event) {
    this.setState((prevState) => ({
      singleItem: { ...prevState.singleItem, [event.target.name]: event.target.value },
    }));
    switch (event.target.value) {
        case "Warhammer 40k":
          this.armyOptions = [];
          this.armyOptions.push(
            <option value="Space Marines">Space Marines</option>,
            <option value="Necrons">Necrons</option>

          );
          break;
        case "Age of Sigmar":
          this.armyOptions = [];
          this.armyOptions.push(
            <option value="Stormcast Eternals">Stormcast Eternals</option>,
            <option value="Nighthaunt">Nighthaunt</option>

          );
          break;
        default:
          return <p>You have failed!</p>;
      }
  }

  handleChange(event) {
    this.setState((prevState) => ({
      singleItem: { ...prevState.singleItem, [event.target.name]: event.target.value },
    }));
  }



//   // test of using a JSON to store units
//   GwDataTest = GWData.W40k.Space_Marines.map((unit, index) => {
//       return <p value={index}>{unit} </p>
//   })


  //render starts here

  render() {
    return (
      <div>
        <form>
          <div>
            <table>
              <tr>
                <td>Game System:</td>
                <td>
                  <select name="gameSystem" value={this.state.singleItem.gameSystem} onChange={this.handleSystemChange}>
                    <option value="default" selected disabled>---</option>
                    <option value="Warhammer 40k">Warhammer 40k</option>
                    <option value="Age of Sigmar">Age of Sigmar</option>
                  </select>
                </td>
                <td>Army:</td>
                <td>
                  <select name="army" value={this.state.singleItem.army} onChange={this.handleChange}>
                    <option selected disabled>---</option>
                    {this.armyOptions}
                  </select>
                </td>
              </tr>
              <tr>
                <td>Unit Name:</td>
                <td>
                    <input name="unitName" value={this.state.singleItem.unitName} onChange={this.handleChange} type="text"></input>
                </td>
                <td>Model Count:</td>
                <td>
                    <input name="modelCount" type="number" value={this.state.singleItem.modelCount} onChange={this.handleChange}></input>
                </td>
              </tr>
              <tr>
                <td>New on Sprue?:</td>
                <td>
                <select name="newOnSprue" value={this.state.singleItem.newOnSprue} onChange={this.handleChange}>
                    <option selected disabled>---</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </td>
                <td>Monopose?:</td>
                <td>
                  <select name="monopose" value={this.state.singleItem.monopose} onChange={this.handleChange}>
                    <option selected disabled>---</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Price Purchased:</td>
                <td>
                  <input name="pricePurchased" type="number" value={this.state.singleItem.pricePurchased} onChange={this.handleChange}></input>
                </td>
                <td>Expected Value:</td>
                <td>
                  <input name="expectedValue" type="number" value={this.state.singleItem.expectedValue} onChange={this.handleChange}></input>
                </td>
              </tr>
              <tr>
                  <td>
                      <button type="submit">Submit</button>
                  </td>
              </tr>
              {this.GwDataTest}

            </table>
          </div>
        </form>
      </div>
    );
  }
}

export default NewInventoryItem;
