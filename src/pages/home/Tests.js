import { Table, Switch, Radio, Form, Space, Progress } from "antd";
import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Home.css";

class Tests extends React.Component {
  
 

  handleStatus(status) {
    switch (status) {
      case "created":
        return <li className="s created">Не начато</li>;
      case "in_progress":
        return <li className="s progress">В процессе</li>;
      case "completed":
        return <li className="s completed">Выполнено</li>;
      default:
        return <li className="s rejected">Отказано</li>;
    }
  }


  columns = [
    {
      title: "Тест",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Подтесты",
      dataIndex: "set",
      key: "set",render: (text, record) => (
        <Space>{record.set}</Space>
      ),
    },
    {
      title: "Отправитель",
      dataIndex: "hr",
      key: "hr",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Приглашение",
      dataIndex: "invited_at",
      key: "invited_at",
      render: (text) => (
        <Space>{new Date(Date.parse(text)).toISOString().slice(0, 10)}</Space>
      ),
    },
    {
      title: "Завершение",
      dataIndex: "ended_at",
      key: "ended_at",
      render: (text) => (
        <Space>{text == null ? "00.00.00" : text.toISOString().slice(0, 10)}</Space>
      ),
    },
    {
      title: "Состояние",
      dataIndex: "status",
      key: "status",
      render: (text) => this.handleStatus(text),
    },
    {
      title: "Прогресс",
      dataIndex: "progress",
      key: "progress",render: (text) => (
        <Progress percent={text || 0}/>
      ),
    },
    {
      title: "Действия",
      render: (text, record) => (
        <Space>
          <Link
            to={
              this.props.sets[record.id - 1]
                ? `/${record.id}/${this.props.sets[record.id - 1][0].quiz}/0`
                : ""
            }
            className={record.status == "expired" || record.status == "completed" ? "disabled-link" : ""}
          >
            Перейти
          </Link>
          <a>Отказ</a>
          <Link
            to="/"
            className={record.status == "completed" ? "" : "disabled-link"}
          >
            Результат
          </Link>
        </Space>
      ),
    },
  ];

  render() {
    return (
      <Table
        rowKey={(record) => record.id}
        columns={this.columns}
        dataSource={this.props.tests}
        className="table"
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tests: state.home.tests,
    sets: state.home.sets,
  };
};

export default connect(mapStateToProps, {})(Tests);
