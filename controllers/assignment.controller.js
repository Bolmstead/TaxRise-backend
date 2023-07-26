import Assignment from "../models/assignment.model.js";
import User from "../models/user.model.js";

/**
 * Get all Assignments

 */
export async function getAllAssignments(req, res) {
  try {
    const assignments = await Assignment.find()
      .populate("task")
      .populate("user")
      .sort({ createdAt: -1 });

    return res.json(assignments);
  } catch (error) {
    console.log(
      "🚀 ~ file: task.controller.js:62233 ~ getAllTasks ~ error:",
      error
    );
    return next(err);
  }
}

/**
 * Get all Clients Assignments

 */
export async function getAllClientAssignments(req, res) {
  try {
    const client = await User.find({ username: req.user.username })
      .populate("assignments")
      .populate("user")
      .sort({ createdAt: -1 });

    return res.json(assignments);
  } catch (error) {
    console.log(
      "🚀 ~ file: task.controller.js:612333 ~ getAllTasks ~ error:",
      error
    );
    return next(err);
  }
}

/**
 * Get task details

 */
export async function getAssignmentDetails(req, res) {
  try {
    const assignment = await Assignment.findById(req.params.id)
      .populate("user")
      .populate("task")
      .sort({ createdAt: -1 });

    return res.json(assignment);
  } catch (error) {
    console.log(
      "🚀 ~ file: task.controller.js:61244233 ~ getAllTasks ~ error:",
      error
    );
    return next(err);
  }
}

/**
 * Edit Assignment details
 */
export async function editAssignmentDetails(req, res) {
  try {
    console.log(
      "🚀 ~ file: assignment.controller.js:72 ~ editAssignmentDetails ~ req.body:",
      req.body
    );

    console.log("req.params.id", req.params.id);
    const assignment = await Assignment.findById(req.params.id)
      .populate("user")
      .populate("task")
      .sort({ createdAt: -1 });

    const { response, status, fileUpload } = req.body;
    console.log(
      "🚀 ~ file: assignment.controller.js:85 ~ editAssignmentDetails ~ response, status, fileUpload:",
      response,
      status,
      fileUpload
    );

    if (status) {
      assignment.status = status;
    }
    console.log("assignment.status", assignment.status);
    if (response) {
      assignment.responses.push(response);
    }
    if (fileUpload) {
      assignment.fileUploads.push(fileUpload);
    }

    const savedAssignment = await assignment.save();

    return res.json(savedAssignment);
  } catch (error) {
    console.log(
      "🚀 ~ file: task.controller.js:6123232323 ~ getAllTasks ~ error:",
      error
    );
    return next(err);
  }
}

// /**
//  * Get task details
//
//  */
// export async function getTaskDetails(req, res) {
//   try {
//       let foundTask = await Task.findById(req.params.id).populate("assignments");
//       if (foundClient) {
//         const tasks = await Assignment.find({})
//           .populate("assignments")
//           .sort({ createdAt: -1 });
//         console.log(
//           "🚀 ~ file: task.controller.js:60 ~ getAllTasks ~ tasks:",
//           tasks
//         );
//       } else {
//         return next(new ExpressError(`Client not found`, 400));
//       }

//     return res.json(tasks);
//   } catch (error) {
//     console.log(
//       "🚀 ~ file: task.controller.12312",
//       error
//     );
//     throw new ExpressError(error);
//   }
// }
