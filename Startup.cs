using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(AngularJsMvcProject_Elias.Startup))]
namespace AngularJsMvcProject_Elias
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
