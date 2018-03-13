using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(EC2_FinalProject.Startup))]
namespace EC2_FinalProject
{
    public partial class Startup {
        public void Configuration(IAppBuilder app) {
            ConfigureAuth(app);
        }
    }
}
