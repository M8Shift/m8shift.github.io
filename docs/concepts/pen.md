# The pen

The pen represents exclusive write ownership.

In relay mode, one pen protects the whole shared working tree. In worktree mode, each
isolated workspace may have one holder while a separate integration pen protects the
final consolidation branch.

The pen is cooperative. It prevents conflicts only when agents follow the protocol and
the host respects the workspace boundaries.
