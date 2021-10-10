package com.team.spiderman.teamspidermanwebapplication.dataStore;


import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.RestController;

import java.sql.*;

import static java.lang.String.format;

@Repository
public class DatabaseController {

    public static void creatDB(String db_name){

        Connection conn;
        PreparedStatement stmt;

        String driver = "com.mysql.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/mydb?userSSL=false";
        String user = "root";
        String password = "admin";

        String sql = format("CREATE DATABASE IF NOT EXISTS ${db_name}", db_name);

        DBExecute(driver, url, user, password, sql);

    }

    public static void creatTable(String table_name){

        String driver = "com.mysql.jdbc.Driver";
        String url = "jdbc:mysql://localhost:3306/mydb?userSSL=false";
        String user = "root";
        String password = "admin";

        String sql = format("CREATE TABLE IF NOT EXISTS ${table_name}"+
                            "(user_id INTEGER(5) NOT NULL,"+
                            "email_addr VARCHAR(255),"+
                            "user_pw VARCHAR(255)," +
                            "PRIMARY KEY(user_id))", table_name);

        DBExecute(driver, url, user, password, sql);

    }

    public static void insertToTable(String table_name, int user_id, String email_addr, String user_pw){
        String driver = "com.mysql.jdbc.Driver";
        String url = format("jdbc:mysql://localhost:3306/mydb/${user_id}?userSSL=false", user_id);
        String user = "root";
        String password = "admin";
        String sql = format("insert into ${table_name} values (?,?,?)", table_name);

        DBExecute(driver, url, user, password, sql);

    }

    public static void DBExecute(String driver, String url, String user, String password, String sql){
        Connection conn;
        PreparedStatement stmt;
        try{
            Class.forName(driver);
            conn = DriverManager.getConnection(url, user, password);
            stmt = (PreparedStatement) conn.prepareStatement(sql);
            stmt.executeUpdate();
            closeAll(conn, stmt, null);
        }catch(ClassNotFoundException e){
            e.printStackTrace();

        }catch(SQLException e){
            e.printStackTrace();
        }
    }


    public static void close(Connection conn, PreparedStatement stmt, ResultSet rs) throws SQLException {
        try{
            if(rs!=null) rs.close();
        }finally{
            try{
                if(stmt!=null) stmt.close();
            }finally{
                if(conn!=null) conn.close();
            }
        }
    }

    public static void closeAll(Connection conn, PreparedStatement stmt, ResultSet rs){
        try{
            close(conn, stmt, rs);
        }catch(SQLException e){
            e.printStackTrace();
        }
    }
}

