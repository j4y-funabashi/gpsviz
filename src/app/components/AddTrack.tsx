
export const AddTrack: React.FC = function () {

    return (
        <form className="space-y-2">
            <label className="block">
                Track title
                <input type="text" required />
            </label>

            <label className="block">
                Choose a day
                <select required>
                    <option selected disabled>--- select a day ---</option>
                    <option>2023-09-01</option>
                    <option>2023-08-20</option>
                    <option>2023-08-19</option>
                    <option>2023-08-18</option>
                    <option>2023-08-17</option>
                </select>
            </label>

            <label className="block">
                Start time
                <select required>
                    <option selected disabled>--- select a time ---</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                </select>
            </label>

            <label className="block">
                End time
                <select required>
                    <option selected disabled>--- select a time ---</option>
                    <option>10:00</option>
                    <option>11:00</option>
                    <option>12:00</option>
                    <option>13:00</option>
                </select>
            </label>
            <input type="submit" value="Add to map" className="bg-green-500 px-2 rounded" />
        </form>
    )
}
