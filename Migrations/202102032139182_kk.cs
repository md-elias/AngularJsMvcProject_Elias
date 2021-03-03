namespace AngularJsMvcProject_Elias.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class kk : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Trainees",
                c => new
                    {
                        TraineeID = c.Int(nullable: false, identity: true),
                        TraineeName = c.String(),
                        MSID = c.String(),
                        ExamCode = c.Int(nullable: false),
                        Score = c.Decimal(nullable: false, precision: 18, scale: 2),
                    })
                .PrimaryKey(t => t.TraineeID);
            
        }
        
        public override void Down()
        {
            DropTable("dbo.Trainees");
        }
    }
}
