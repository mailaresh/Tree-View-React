import React, { Component } from 'react';
import './App.css';

const data = [
  {
    "country": "EMEA",
    "location": [
      {
        "region": "Berlin"
      }
    ]
  },
  {
    "country": "Colo",
    "location": [
      {
        "region": "Colo Demo Room"
      }
    ]
  },
  {
    "country": "North America",
    "location": [
      {
        "region": "St. Louis"
      },
      {
        "region": "San Diego"
      }
    ]
  },
  {
    "country": "Asia",
    "location": [
      {
        "region": "Singapore"
      }
    ]
  },
  {
    "country": "South America",
    "location": [
      {
        "region": "DCO-Demo-Room-1"
      },
      {
        "region": "HPE Demo"
      }
    ]
  }
];
class TreeNode extends Component {

  state = { expanded: false };

  toggleExpanded = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      const expanded = !this.state.expanded;
      this.setState({ expanded });
    }
  };

  render() {
    const { expanded } = this.state;
    const { children } = this.props;
    
    if(this.props.type === "ul") {
      return (
        <ul className={'treenode' + (expanded ? ' expanded' : '')}
        onClick={this.toggleExpanded}>
          {children}
        </ul>
      );
    } else {
      return (
        <div className={'treenode' + (expanded ? ' expanded' : '')}>
            <div className="horz"></div>
            <li onClick={this.toggleExpanded}>
              {children}
            </li>
        </div>
      );
    }
  }
}

export default function App() {
  return (
    <div className="container">
      <div className="card-body">
        {data.map((d, i) => {
          if(d.location.length <= 0)
          return <div><TreeNode type="ul">{d.country}</TreeNode><hr></hr></div>;
          else {
            return (
              <div>
                <TreeNode type="ul">{d.country}
                  {d.location.map(n =>
                    <TreeNode type="li">{n.region}</TreeNode> 
                  )}
                </TreeNode>
                <hr></hr>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}