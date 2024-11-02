using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

namespace ECServer.Database
{
    public class DataLayer
    {
        private readonly string _connectionString;

        public DataLayer(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("DefaultConnection");
        }

        // Method to retrieve data with parameters
        public DataTable GetFromDb(string spName, Dictionary<string, object> parameters)
        {
            using (var con = new SqlConnection(_connectionString))
            using (var com = new SqlCommand(spName, con))
            {
                com.CommandType = CommandType.StoredProcedure;

                foreach (var param in parameters)
                    com.Parameters.AddWithValue(param.Key, param.Value);

                var dt = new DataTable();
                try
                {
                    con.Open();
                    using (var da = new SqlDataAdapter(com))
                    {
                        da.Fill(dt);
                    }
                }
                catch (Exception ex)
                {
                    // Log the exception
                    Console.Error.WriteLine(ex.Message); // Replace with a logging framework
                }
                return dt;
            }
        }

        // Method to retrieve data without parameters
        public DataTable GetFromDb(string spName)
        {
            using (var con = new SqlConnection(_connectionString))
            using (var com = new SqlCommand(spName, con))
            {
                com.CommandType = CommandType.StoredProcedure;

                var dt = new DataTable();
                try
                {
                    con.Open();
                    using (var da = new SqlDataAdapter(com))
                    {
                        da.Fill(dt);
                    }
                }
                catch (Exception ex)
                {
                    // Log the exception
                    Console.Error.WriteLine(ex.Message); // Replace with a logging framework
                }
                return dt;
            }
        }

        // Method for insert, update, or delete
        public int ExecuteNonQuery(string spName, Dictionary<string, object> parameters)
        {
            using (var con = new SqlConnection(_connectionString))
            using (var com = new SqlCommand(spName, con))
            {
                com.CommandType = CommandType.StoredProcedure;

                foreach (var param in parameters)
                    com.Parameters.AddWithValue(param.Key, param.Value);

                try
                {
                    con.Open();
                    return com.ExecuteNonQuery();
                }
                catch (Exception ex)
                {
                    // Log the exception
                    Console.Error.WriteLine(ex.Message); // Replace with a logging framework
                    return -1;
                }
            }
        }
    }
}
