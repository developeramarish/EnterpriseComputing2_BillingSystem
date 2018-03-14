<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="EC2_FinalProject.Maintenance.Default" %>

<asp:Content ID="Content2" ContentPlaceHolderID="MainContent" runat="server">
    <h1 class="txt-center">Maintain Users and Roles</h1>
    <table class="table">
        <tr>
            <td class="auto-style1">
                <h2>Users</h2>
                <asp:GridView ID="grdUsers" runat="server" DataKeyNames="Id"
                    AutoGenerateColumns="False" SelectMethod="grdUsers_GetData"
                    ItemType="EC2_FinalProject.Models.ApplicationUser"
                    CssClass="table-bordered table-striped table-condensed"
                    OnPreRender="GridView_PreRender" Width="367px">
                    <Columns>
                        <asp:BoundField HeaderText="User Name" DataField="UserName" />
                        <asp:BoundField HeaderText="Email" DataField="Email" />
                        <asp:TemplateField HeaderText="Roles">
                            <ItemTemplate>
                                <asp:Label runat="server" Text="<%#ListRoles(Item.Roles)%>"></asp:Label>
                            </ItemTemplate>
                        </asp:TemplateField>
                        <asp:CommandField ShowSelectButton="true" />
                    </Columns>
                </asp:GridView>
            </td>
            <td class="auto-style2">
                <br /><br /><br />
                <asp:DetailsView ID="dvUsers" runat="server" DataKeyNames="Id"
                    AutoGenerateRows="false" CssClass="table-bordered table-condensed"
                    SelectMethod="dvUsers_GetItem" UpdateMethod="dvUsers_UpdateItem"
                    InsertMethod="dvUsers_InsertItem" DeleteMethod="dvUsers_DeleteItem" Width="238px">
                    <Fields>
                        <asp:BoundField HeaderText="Email" DataField="Email" />
                        <asp:CommandField ShowEditButton="true" ShowInsertButton="true"
                            ShowDeleteButton="true" />
                    </Fields>
                </asp:DetailsView>
            </td>
        </tr>
        <tr>
            <td class="auto-style1">
                <h2 class="txt-lt"><strong>Roles</strong></h2>
                <asp:GridView ID="grdRoles" runat="server" DataKeyNames="Id"
                    AutoGenerateColumns="false" SelectMethod="grdRoles_GetData"
                    CssClass="table-bordered table-striped table-condensed"
                    OnPreRender="GridView_PreRender" Width="297px">
                    <Columns>
                        <asp:BoundField HeaderText="Role Name" DataField="Name" />
                        <asp:CommandField ShowSelectButton="true" />
                    </Columns>
                </asp:GridView>
                <asp:DetailsView ID="dvRoles" runat="server" DataKeyNames="Id"
                    AutoGenerateRows="false" CssClass="table-bordered table-condensed"
                    SelectMethod="dvRoles_GetItem" UpdateMethod="dvRoles_UpdateItem"
                    InsertMethod="dvRoles_InsertItem" DeleteMethod="dvRoles_DeleteItem" Width="294px">
                    <Fields>
                        <asp:BoundField HeaderText="Role Name" DataField="Name" />
                        <asp:CommandField ShowEditButton="true" ShowInsertButton="true"
                            ShowDeleteButton="true" />
                    </Fields>
                </asp:DetailsView>
            </td>
            <td class="auto-style2">
                <h2>Add Roles to User</h2>
                <div class="form-group">
                    <label class="control-label">Select a user:</label>
                    <asp:DropDownList ID="ddlUsers" runat="server"
                        SelectMethod="grdUsers_GetData" DataValueField="Id"
                        DataTextField="UserName" CssClass="form-control" Height="44px" Width="220px">
                    </asp:DropDownList>
                </div>
                <div class="form-group">
                    <label class="control-label">Add one or more roles:</label>
                    <asp:ListBox ID="lstRoles" runat="server" SelectionMode="Multiple"
                        SelectMethod="grdRoles_GetData" DataValueField="Id"
                        DataTextField="Name" CssClass="form-control" Width="229px"></asp:ListBox>
                </div>
                <div class="form-group">
                    <asp:Button ID="btnAddRoles" runat="server" Text="Add Roles"
                        CssClass="btn btn-default" OnClick="btnAddRoles_Click" Width="214px" />
                </div>
            </td>
        </tr>
    </table>
</asp:Content>