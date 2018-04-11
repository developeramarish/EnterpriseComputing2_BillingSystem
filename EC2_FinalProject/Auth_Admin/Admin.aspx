<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Admin.aspx.cs" Inherits="EC2_FinalProject.Auth_Admin.Admin" %>

<%@ Register Assembly="CustomerCalender" Namespace="CustomerCalender" TagPrefix="cc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="MainContent" runat="server">

    <asp:Button class="btn btn-primary" ID="btnncb" runat="server" Text="NCB Login" OnClick="btnncb_Click"></asp:Button>
    <asp:Button class="btn btn-primary" ID="btnroles" runat="server" Text="Manage User Roles" OnClick="btnroles_Click" Width="147px" />
    <br />
    <br />

    <center>
        <h1 style="color: #0033CC"><span style="color: #3333FF">Customer Bill Detail</span>s</h1>
    <asp:GridView ID="GridView1" runat="server" AutoGenerateColumns="False" DataSourceID="SqlDataSource1" DataKeyNames="BillId" CellPadding="4" ForeColor="#333333" GridLines="None" Width="832px">
        <AlternatingRowStyle BackColor="White" />
        <Columns>
            <asp:CommandField ShowSelectButton="True" ShowDeleteButton="True" />
            <asp:BoundField DataField="BillId" HeaderText="BillId" SortExpression="BillId" InsertVisible="False" ReadOnly="True" />
            <asp:BoundField DataField="CustomerId" HeaderText="CustomerId" SortExpression="CustomerId" />
            <asp:BoundField DataField="FirstName" HeaderText="FirstName" SortExpression="FirstName" />
            <asp:BoundField DataField="LastName" HeaderText="LastName" SortExpression="LastName" />
            <asp:BoundField DataField="Email" HeaderText="Email" SortExpression="Email" />
            <asp:BoundField DataField="DueDate" HeaderText="DueDate" SortExpression="DueDate" />
            <asp:BoundField DataField="StatementDate" HeaderText="StatementDate" SortExpression="StatementDate" />
            <asp:BoundField DataField="Amount" HeaderText="Amount" SortExpression="Amount" />
        </Columns>
        <EditRowStyle BackColor="#2461BF" />
        <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
        <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
        <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
        <RowStyle BackColor="#EFF3FB" />
        <SelectedRowStyle BackColor="#D1DDF1" Font-Bold="True" ForeColor="#333333" />
        <SortedAscendingCellStyle BackColor="#F5F7FB" />
        <SortedAscendingHeaderStyle BackColor="#6D95E1" />
        <SortedDescendingCellStyle BackColor="#E9EBEF" />
        <SortedDescendingHeaderStyle BackColor="#4870BE" />
    </asp:GridView>

    <br /><br /><br />
    
    <asp:DetailsView ID="DetailsView1" runat="server" Height="50px" Width="338px" DataSourceID="ObjectDataSource1" CellPadding="4" ForeColor="#333333" GridLines="None">
        <AlternatingRowStyle BackColor="White" />
        <CommandRowStyle BackColor="#D1DDF1" Font-Bold="True" />
        <EditRowStyle BackColor="#2461BF" />
        <FieldHeaderStyle BackColor="#DEE8F5" Font-Bold="True" />
        <Fields>
            <asp:CommandField ShowEditButton="True" ShowInsertButton="True" />
        </Fields>
        <FooterStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
        <HeaderStyle BackColor="#507CD1" Font-Bold="True" ForeColor="White" />
        <PagerStyle BackColor="#2461BF" ForeColor="White" HorizontalAlign="Center" />
        <RowStyle BackColor="#EFF3FB" />
    </asp:DetailsView>


    </center>


    <asp:ObjectDataSource ID="ObjectDataSource1" runat="server" DeleteMethod="Bill_DeleteById" InsertMethod="Bill_Insert" OldValuesParameterFormatString="original_{0}" SelectMethod="Bill_SelectById_IEnumerable" TypeName="EC2_FinalProject.Models.BusinessClass" UpdateMethod="Bill_UpdateById">
        <DeleteParameters>
            <asp:Parameter Name="BillId" Type="Int32" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="BillId" Type="Int32" />
            <asp:Parameter Name="CustomerId" Type="Int32" />
            <asp:Parameter Name="FirstName" Type="String" />
            <asp:Parameter Name="LastName" Type="String" />
            <asp:Parameter Name="Email" Type="String" />
            <asp:Parameter Name="DueDate" Type="DateTime" />
            <asp:Parameter Name="StatementDate" Type="DateTime" />
            <asp:Parameter Name="Amount" Type="Double" />
        </InsertParameters>
        <SelectParameters>
            <asp:ControlParameter ControlID="GridView1" Name="BillId" PropertyName="SelectedValue" Type="Int32" />
        </SelectParameters>
        <UpdateParameters>
            <asp:Parameter Name="BillId" Type="Int32" />
            <asp:Parameter Name="CustomerId" Type="Int32" />
            <asp:Parameter Name="FirstName" Type="String" />
            <asp:Parameter Name="LastName" Type="String" />
            <asp:Parameter Name="Email" Type="String" />
            <asp:Parameter Name="DueDate" Type="DateTime" />
            <asp:Parameter Name="StatementDate" Type="DateTime" />
            <asp:Parameter Name="Amount" Type="Double" />
        </UpdateParameters>
    </asp:ObjectDataSource>


    <asp:SqlDataSource ID="SqlDataSource1" runat="server" ConnectionString="<%$ ConnectionStrings:LimeConnectionString %>" DeleteCommand="Bill_DeleteById" DeleteCommandType="StoredProcedure" InsertCommand="Bill_Insert" InsertCommandType="StoredProcedure" SelectCommand="Bill_SelectAll" SelectCommandType="StoredProcedure" UpdateCommand="Bill_UpdateById" UpdateCommandType="StoredProcedure">
        <DeleteParameters>
            <asp:Parameter Name="BillId" Type="Int32" />
        </DeleteParameters>
        <InsertParameters>
            <asp:Parameter Name="CustomerId" Type="Int32" />
            <asp:Parameter Name="FirstName" Type="String" />
            <asp:Parameter Name="LastName" Type="String" />
            <asp:Parameter DbType="Date" Name="DueDate" />
            <asp:Parameter DbType="Date" Name="StatementDate" />
            <asp:Parameter Name="Amount" Type="Decimal" />
        </InsertParameters>
        <UpdateParameters>
            <asp:Parameter Name="BillId" Type="Int32" />
            <asp:Parameter Name="CustomerId" Type="Int32" />
            <asp:Parameter Name="FirstName" Type="String" />
            <asp:Parameter Name="LastName" Type="String" />
            <asp:Parameter DbType="Date" Name="DueDate" />
            <asp:Parameter DbType="Date" Name="StatementDate" />
            <asp:Parameter Name="Amount" Type="Decimal" />
        </UpdateParameters>
    </asp:SqlDataSource>

</asp:Content>
