import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";


interface props {
    activities: Activity[];
}

export default function ActivityDashboard({activities}: props) {

    return (
        <Grid>
            <Grid.Column width='10'>
                <List>
                    {activities.map(activity => (
                        <List.Item key={activity.id}>
                            {activity.title}
                        </List.Item>
                    ))}
                </List>
            </Grid.Column>
        </Grid>
    )
}