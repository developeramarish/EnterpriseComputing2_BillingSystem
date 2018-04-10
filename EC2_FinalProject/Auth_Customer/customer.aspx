<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Customer.aspx.cs" Inherits="EC2_FinalProject.Auth_Customer.Customer" %>

<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">
    <asp:HyperLink ID="HyperLink1"  NavigateUrl="~/ScotiaLogin.aspx" runat="server">Scotia Login</asp:HyperLink><br /><br />
    <center>
        
        <h3>Bill Summary</h3>
        
        <%--Grid View--%>
        <asp:GridView ID="GridView1" runat="server" CellPadding="10" DataSourceID="SqlDataSource1" GridLines="Vertical" AutoGenerateColumns="False" BackColor="White" BorderColor="#999999" BorderStyle="None" BorderWidth="1px" DataKeyNames="BillId">
        <AlternatingRowStyle BackColor="#DCDCDC" />
        <Columns>
            <asp:CommandField ShowSelectButton="True" HeaderText="Select Bill  "/>
            <asp:BoundField DataField="BillId" HeaderText="BillId" InsertVisible="False" ReadOnly="True" SortExpression="BillId" />
            <asp:BoundField DataField="FirstName" HeaderText="First Name" SortExpression="FirstName" />
            <asp:BoundField DataField="LastName" HeaderText="Last Name" SortExpression="LastName" />
            <asp:BoundField DataField="DueDate" HeaderText="Due Date" SortExpression="DueDate" />
            <asp:BoundField DataField="StatementDate" HeaderText="Statement Date" SortExpression="StatementDate" />
            <asp:BoundField DataField="Amount" HeaderText="Amount" SortExpression="Amount" />
        </Columns>
        <FooterStyle BackColor="#CCCCCC" ForeColor="Black" />
        <HeaderStyle BackColor="#000084" ForeColor="White" HorizontalAlign="Center"/>
        <PagerStyle BackColor="#999999" ForeColor="Black" HorizontalAlign="Center" />
        <RowStyle BackColor="#EEEEEE" />
        <SelectedRowStyle BackColor="#008A8C"  ForeColor="White" />
        <SortedAscendingCellStyle BackColor="#F1F1F1" />
        <SortedAscendingHeaderStyle BackColor="#0000A9" />
        <SortedDescendingCellStyle BackColor="#CAC9C9" />
        <SortedDescendingHeaderStyle BackColor="#000065" />
        </asp:GridView><br />
        <%------------------------------------------%>

        <%--Display Labels--%>
        <h3><asp:Label ID="lblmessage" runat="server" style="font-size: large; font-weight: 700"></asp:Label></h3>
        <asp:Label ID="lblmessage2" runat="server"></asp:Label>
        <%------------------%>

   </center><br />

    <%--<asp:DetailsView ID="DetailsView1" runat="server" AutoGenerateRows="False" DataKeyNames="BillId" DataSourceID="SqlDataSource1" Height="50px" Width="670px" BackColor="White" BorderColor="#E7E7FF" BorderStyle="None" BorderWidth="1px" CellPadding="3" GridLines="Horizontal" CssClass="table">
        <AlternatingRowStyle BackColor="#F7F7F7" />
        <EditRowStyle BackColor="#738A9C" Font-Bold="True" ForeColor="#F7F7F7" />
        <Fields>
            <asp:BoundField DataField="BillId" HeaderText="BillId: " InsertVisible="False" ReadOnly="True" SortExpression="BillId" />
            <asp:BoundField DataField="FirstName" HeaderText="First Name:" SortExpression="FirstName" />
            <asp:BoundField DataField="LastName" HeaderText="Last Name:" SortExpression="LastName" />
            <asp:BoundField DataField="DueDate" HeaderText="Due Date:" SortExpression="DueDate" />
            <asp:BoundField DataField="StatementDate" HeaderText="Statement Date: " SortExpression="StatementDate" />
            <asp:BoundField DataField="Amount" HeaderText="Amount: " SortExpression="Amount" />
        </Fields>
        <FooterStyle BackColor="#B5C7DE" ForeColor="#4A3C8C" />
        <HeaderStyle BackColor="#4A3C8C" Font-Bold="True" ForeColor="#F7F7F7" />
        <PagerStyle BackColor="#E7E7FF" ForeColor="#4A3C8C" HorizontalAlign="Right" />
        <RowStyle BackColor="#E7E7FF" ForeColor="#4A3C8C" />
    </asp:DetailsView>--%>
  
    <%--Pay Bill Form--%>
    <center><h3>Pay Bill with Soctia Account</h3>
    <table class="table">
        <tr>
            <td style="width: 286px">
                <asp:Label ID="lblAcountId" runat="server" Text="Acount Id:"></asp:Label></td>
            <td>
                <asp:TextBox ID="acountId" runat="server" Width="329px"></asp:TextBox></td>
        </tr>
        <tr>
            <td style="width: 286px">
                <asp:Label ID="lblName" runat="server" Text="Name on Acount:  "></asp:Label></td>
            <td>
                <asp:TextBox ID="name" runat="server" Width="329px"></asp:TextBox></td>
        </tr>
         <tr>
            <td style="width: 286px">
                <asp:Label ID="accountType" runat="server" Text="Account Type: "></asp:Label></td>
            <td>
                <asp:TextBox ID="accType" runat="server" Width="329px"></asp:TextBox></td>
        </tr>
        <tr>
            <td style="width: 286px">
                <asp:Label ID="lblAmount" runat="server" Text="Amount Paying:  "></asp:Label></td>
            <td>
                <asp:TextBox ID="amount" runat="server" Width="329px"></asp:TextBox></td>
        </tr>

        <tr>
            <td style="width: 286px">
                <asp:Label ID="soctiauser" runat="server" Text="Soctia Account Username:  "></asp:Label></td>
            <td>
                <asp:TextBox ID="bankuser" runat="server" Width="329px"></asp:TextBox></td>
        </tr>
        <tr>
            <td style="width: 286px">
                <asp:Label ID="scotiapassword" runat="server" Text="Soctia Account Password:  "></asp:Label></td>
            <td>
                <asp:TextBox ID="bankpassword" runat="server" Width="329px" TextMode="Password"></asp:TextBox></td>
        </tr>
        <tr>
            <td style="width: 585px" colspan="2">
                <center><asp:Button ID="pay" runat="server" Text="Pay Bill" Width="668px" CssClass="btn btn-primary" OnClick="pay_Click" /></center> 
            </td>
        </tr>
    </table>
    </center><br />
    <%------------------------------------------%>

    <%--SQLDataSource for getting customer bill by email used to log in--%>
    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:LimeConnectionString %>" SelectCommand="Bill_SelectByEmail" SelectCommandType="StoredProcedure">
        <SelectParameters>
            <asp:ControlParameter ControlID="user" Name="customerEmail" PropertyName="Text" Type="String" />
        </SelectParameters>
    </asp:SqlDataSource>
    <%--------------------------------------------------------------------%>

    <asp:Label ID="user" runat="server" Visible="false"></asp:Label>
    <asp:SqlDataSource ID="SqlDataSource2" runat="server" ConnectionString="<%$ ConnectionStrings:ScotiaBankConnectionString %>" SelectCommand="SoctiaLogin" SelectCommandType="StoredProcedure">
        <SelectParameters>
            <asp:ControlParameter ControlID="bankuser" Name="username" PropertyName="Text" Type="String" />
            <asp:ControlParameter ControlID="bankpassword" Name="password" PropertyName="Text" Type="String" />
        </SelectParameters>
    </asp:SqlDataSource>
</asp:Content>
