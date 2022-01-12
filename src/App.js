import "./App.css";
import datacenters from "./DataCenters";
import React, { Component } from "react";
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
    // const { children } = this.props;

    if (this.props.head === "dcType") {
      return (
        <ul
          className={"treenode noVertical" + (expanded ? " expanded" : "")}
          onClick={this.toggleExpanded}
        >
          {this.props.children}
        </ul>
      );
    } else {
      return (
        <ul
          className={"treenode" + (expanded ? " expanded" : "")}
          onClick={this.toggleExpanded}
        >
          {" "}
          <div className="horz1"></div>
          {this.props.children}
        </ul>
      );
    }
  }
}

export default function App() {
  function ConstructTree(arr) {
    return arr.map((d, i) => {
      return (
        <TreeNode head="dcType">
          {" "}
          {d["dcType"] ? d["dcType"] : "NA"}
          {d["regions"] && d["regions"].length > 0
            ? d["regions"].map((l1) => {
                return (
                  <TreeNode>
                    {" "}
                    {l1["region"] ? l1["region"] : "NA"}
                    {l1["countries"] && l1["countries"].length > 0
                      ? l1["countries"].map((l2) => {
                          return (
                            <TreeNode>
                              {" "}
                              {l2["countryName"] ? l2["countryName"] : "NA"}
                              {l2["cities"] && l2["cities"].length > 0
                                ? l2["cities"].map((l3) => {
                                    return (
                                      <TreeNode>
                                        {" "}
                                        {l3["cityName"] ? l3["cityName"] : "NA"}
                                        {l3["locations"] &&
                                        l3["locations"].length > 0
                                          ? l3["locations"].map((loc) => {
                                              return (
                                                <TreeNode>
                                                  {" "}
                                                  {loc["locationName"]
                                                    ? loc["locationName"]
                                                    : "NA"}{" "}
                                                </TreeNode>
                                              );
                                            })
                                          : null}
                                      </TreeNode>
                                    );
                                  })
                                : null}
                            </TreeNode>
                          );
                        })
                      : null}
                  </TreeNode>
                );
              })
            : null}
          {i < datacenters.length - 1 ? <hr></hr> : null}
        </TreeNode>
      );
    });
  }
  return (
    <div className="container">
      <div className="card-body">{ConstructTree(datacenters)}</div>
    </div>
  );
}